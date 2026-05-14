/**
 * Generated Tool: usersTool_0500
 * Domain: Users
 * ID: 0500
 */
exports.usersTool_0500 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0500:', error);
    throw error;
  }
};
