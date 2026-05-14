/**
 * Generated Tool: workspacesTool_0912
 * Domain: Workspaces
 * ID: 0912
 */
exports.workspacesTool_0912 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0912:', error);
    throw error;
  }
};
