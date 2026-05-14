/**
 * Generated Tool: usersTool_0975
 * Domain: Users
 * ID: 0975
 */
exports.usersTool_0975 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0975:', error);
    throw error;
  }
};
