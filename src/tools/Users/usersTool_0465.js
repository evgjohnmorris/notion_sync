/**
 * Generated Tool: usersTool_0465
 * Domain: Users
 * ID: 0465
 */
exports.usersTool_0465 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0465:', error);
    throw error;
  }
};
