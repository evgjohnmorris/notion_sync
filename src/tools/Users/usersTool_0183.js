/**
 * Generated Tool: usersTool_0183
 * Domain: Users
 * ID: 0183
 */
exports.usersTool_0183 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0183:', error);
    throw error;
  }
};
