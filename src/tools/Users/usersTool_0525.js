/**
 * Generated Tool: usersTool_0525
 * Domain: Users
 * ID: 0525
 */
exports.usersTool_0525 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0525:', error);
    throw error;
  }
};
