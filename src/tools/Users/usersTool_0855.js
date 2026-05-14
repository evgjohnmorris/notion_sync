/**
 * Generated Tool: usersTool_0855
 * Domain: Users
 * ID: 0855
 */
exports.usersTool_0855 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0855:', error);
    throw error;
  }
};
