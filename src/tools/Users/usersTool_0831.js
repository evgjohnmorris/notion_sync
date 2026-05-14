/**
 * Generated Tool: usersTool_0831
 * Domain: Users
 * ID: 0831
 */
exports.usersTool_0831 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0831:', error);
    throw error;
  }
};
