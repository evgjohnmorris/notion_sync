/**
 * Generated Tool: usersTool_0218
 * Domain: Users
 * ID: 0218
 */
exports.usersTool_0218 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0218:', error);
    throw error;
  }
};
