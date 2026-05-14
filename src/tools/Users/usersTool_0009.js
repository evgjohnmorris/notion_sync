/**
 * Generated Tool: usersTool_0009
 * Domain: Users
 * ID: 0009
 */
exports.usersTool_0009 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0009:', error);
    throw error;
  }
};
