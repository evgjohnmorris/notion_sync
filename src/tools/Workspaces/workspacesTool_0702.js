/**
 * Generated Tool: workspacesTool_0702
 * Domain: Workspaces
 * ID: 0702
 */
exports.workspacesTool_0702 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0702:', error);
    throw error;
  }
};
