/**
 * Generated Tool: blocksTool_0562
 * Domain: Blocks
 * ID: 0562
 */
exports.blocksTool_0562 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0562:', error);
    throw error;
  }
};
