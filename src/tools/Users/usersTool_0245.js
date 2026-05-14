/**
 * Generated Tool: usersTool_0245
 * Domain: Users
 * ID: 0245
 */
exports.usersTool_0245 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0245:', error);
    throw error;
  }
};
