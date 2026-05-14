/**
 * Generated Tool: usersTool_0456
 * Domain: Users
 * ID: 0456
 */
exports.usersTool_0456 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0456:', error);
    throw error;
  }
};
