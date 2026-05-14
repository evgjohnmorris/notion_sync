/**
 * Generated Tool: workspacesTool_0420
 * Domain: Workspaces
 * ID: 0420
 */
exports.workspacesTool_0420 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0420:', error);
    throw error;
  }
};
