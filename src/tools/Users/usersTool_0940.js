/**
 * Generated Tool: usersTool_0940
 * Domain: Users
 * ID: 0940
 */
exports.usersTool_0940 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0940:', error);
    throw error;
  }
};
