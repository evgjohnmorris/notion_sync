/**
 * Generated Tool: usersTool_0454
 * Domain: Users
 * ID: 0454
 */
exports.usersTool_0454 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0454:', error);
    throw error;
  }
};
