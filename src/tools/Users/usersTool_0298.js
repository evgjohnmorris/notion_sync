/**
 * Generated Tool: usersTool_0298
 * Domain: Users
 * ID: 0298
 */
exports.usersTool_0298 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0298:', error);
    throw error;
  }
};
