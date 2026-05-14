/**
 * Generated Tool: usersTool_0052
 * Domain: Users
 * ID: 0052
 */
exports.usersTool_0052 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0052:', error);
    throw error;
  }
};
