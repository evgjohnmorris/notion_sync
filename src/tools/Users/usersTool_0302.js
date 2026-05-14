/**
 * Generated Tool: usersTool_0302
 * Domain: Users
 * ID: 0302
 */
exports.usersTool_0302 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0302:', error);
    throw error;
  }
};
