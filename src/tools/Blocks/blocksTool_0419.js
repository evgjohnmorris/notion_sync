/**
 * Generated Tool: blocksTool_0419
 * Domain: Blocks
 * ID: 0419
 */
exports.blocksTool_0419 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0419:', error);
    throw error;
  }
};
