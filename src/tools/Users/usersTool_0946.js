/**
 * Generated Tool: usersTool_0946
 * Domain: Users
 * ID: 0946
 */
exports.usersTool_0946 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0946:', error);
    throw error;
  }
};
