/**
 * Generated Tool: usersTool_0526
 * Domain: Users
 * ID: 0526
 */
exports.usersTool_0526 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0526:', error);
    throw error;
  }
};
