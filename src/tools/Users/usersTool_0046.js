/**
 * Generated Tool: usersTool_0046
 * Domain: Users
 * ID: 0046
 */
exports.usersTool_0046 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0046:', error);
    throw error;
  }
};
