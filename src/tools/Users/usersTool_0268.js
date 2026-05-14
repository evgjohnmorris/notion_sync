/**
 * Generated Tool: usersTool_0268
 * Domain: Users
 * ID: 0268
 */
exports.usersTool_0268 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0268:', error);
    throw error;
  }
};
