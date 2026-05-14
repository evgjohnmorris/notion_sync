/**
 * Generated Tool: usersTool_0414
 * Domain: Users
 * ID: 0414
 */
exports.usersTool_0414 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0414:', error);
    throw error;
  }
};
