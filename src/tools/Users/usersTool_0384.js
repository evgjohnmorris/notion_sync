/**
 * Generated Tool: usersTool_0384
 * Domain: Users
 * ID: 0384
 */
exports.usersTool_0384 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0384:', error);
    throw error;
  }
};
