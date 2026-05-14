/**
 * Generated Tool: usersTool_0222
 * Domain: Users
 * ID: 0222
 */
exports.usersTool_0222 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0222:', error);
    throw error;
  }
};
