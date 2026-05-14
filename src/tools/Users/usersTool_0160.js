/**
 * Generated Tool: usersTool_0160
 * Domain: Users
 * ID: 0160
 */
exports.usersTool_0160 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0160:', error);
    throw error;
  }
};
