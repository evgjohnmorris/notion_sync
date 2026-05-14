/**
 * Generated Tool: usersTool_0340
 * Domain: Users
 * ID: 0340
 */
exports.usersTool_0340 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0340:', error);
    throw error;
  }
};
