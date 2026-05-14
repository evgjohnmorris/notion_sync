/**
 * Generated Tool: usersTool_0455
 * Domain: Users
 * ID: 0455
 */
exports.usersTool_0455 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0455:', error);
    throw error;
  }
};
