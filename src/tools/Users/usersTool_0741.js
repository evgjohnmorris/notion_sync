/**
 * Generated Tool: usersTool_0741
 * Domain: Users
 * ID: 0741
 */
exports.usersTool_0741 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0741:', error);
    throw error;
  }
};
