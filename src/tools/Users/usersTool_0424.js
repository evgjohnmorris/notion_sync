/**
 * Generated Tool: usersTool_0424
 * Domain: Users
 * ID: 0424
 */
exports.usersTool_0424 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0424:', error);
    throw error;
  }
};
