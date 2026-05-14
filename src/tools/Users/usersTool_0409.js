/**
 * Generated Tool: usersTool_0409
 * Domain: Users
 * ID: 0409
 */
exports.usersTool_0409 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0409:', error);
    throw error;
  }
};
