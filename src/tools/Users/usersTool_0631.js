/**
 * Generated Tool: usersTool_0631
 * Domain: Users
 * ID: 0631
 */
exports.usersTool_0631 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0631:', error);
    throw error;
  }
};
