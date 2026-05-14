/**
 * Generated Tool: usersTool_0365
 * Domain: Users
 * ID: 0365
 */
exports.usersTool_0365 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0365:', error);
    throw error;
  }
};
