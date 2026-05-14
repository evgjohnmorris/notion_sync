/**
 * Generated Tool: usersTool_0705
 * Domain: Users
 * ID: 0705
 */
exports.usersTool_0705 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0705:', error);
    throw error;
  }
};
