/**
 * Generated Tool: usersTool_0973
 * Domain: Users
 * ID: 0973
 */
exports.usersTool_0973 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0973:', error);
    throw error;
  }
};
