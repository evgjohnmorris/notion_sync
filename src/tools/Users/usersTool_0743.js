/**
 * Generated Tool: usersTool_0743
 * Domain: Users
 * ID: 0743
 */
exports.usersTool_0743 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0743:', error);
    throw error;
  }
};
