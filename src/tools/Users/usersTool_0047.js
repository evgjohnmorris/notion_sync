/**
 * Generated Tool: usersTool_0047
 * Domain: Users
 * ID: 0047
 */
exports.usersTool_0047 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0047:', error);
    throw error;
  }
};
