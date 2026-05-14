/**
 * Generated Tool: usersTool_0911
 * Domain: Users
 * ID: 0911
 */
exports.usersTool_0911 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0911:', error);
    throw error;
  }
};
