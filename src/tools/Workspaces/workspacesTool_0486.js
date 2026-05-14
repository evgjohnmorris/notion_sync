/**
 * Generated Tool: workspacesTool_0486
 * Domain: Workspaces
 * ID: 0486
 */
exports.workspacesTool_0486 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0486:', error);
    throw error;
  }
};
