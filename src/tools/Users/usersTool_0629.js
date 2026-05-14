/**
 * Generated Tool: usersTool_0629
 * Domain: Users
 * ID: 0629
 */
exports.usersTool_0629 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0629:', error);
    throw error;
  }
};
