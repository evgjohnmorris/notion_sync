/**
 * Generated Tool: workspacesTool_0528
 * Domain: Workspaces
 * ID: 0528
 */
exports.workspacesTool_0528 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0528:', error);
    throw error;
  }
};
