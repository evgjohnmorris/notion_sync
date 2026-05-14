/**
 * Generated Tool: usersTool_0478
 * Domain: Users
 * ID: 0478
 */
exports.usersTool_0478 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0478:', error);
    throw error;
  }
};
