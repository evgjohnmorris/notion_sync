/**
 * Generated Tool: workspacesTool_0182
 * Domain: Workspaces
 * ID: 0182
 */
exports.workspacesTool_0182 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0182:', error);
    throw error;
  }
};
