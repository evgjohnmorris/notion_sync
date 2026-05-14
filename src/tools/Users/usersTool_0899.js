/**
 * Generated Tool: usersTool_0899
 * Domain: Users
 * ID: 0899
 */
exports.usersTool_0899 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0899:', error);
    throw error;
  }
};
