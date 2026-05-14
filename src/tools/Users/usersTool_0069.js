/**
 * Generated Tool: usersTool_0069
 * Domain: Users
 * ID: 0069
 */
exports.usersTool_0069 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0069:', error);
    throw error;
  }
};
