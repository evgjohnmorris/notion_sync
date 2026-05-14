/**
 * Generated Tool: workspacesTool_0736
 * Domain: Workspaces
 * ID: 0736
 */
exports.workspacesTool_0736 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0736:', error);
    throw error;
  }
};
