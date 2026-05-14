/**
 * Generated Tool: usersTool_0591
 * Domain: Users
 * ID: 0591
 */
exports.usersTool_0591 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0591:', error);
    throw error;
  }
};
