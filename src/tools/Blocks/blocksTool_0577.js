/**
 * Generated Tool: blocksTool_0577
 * Domain: Blocks
 * ID: 0577
 */
exports.blocksTool_0577 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0577:', error);
    throw error;
  }
};
