/**
 * Generated Tool: usersTool_0552
 * Domain: Users
 * ID: 0552
 */
exports.usersTool_0552 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0552:', error);
    throw error;
  }
};
