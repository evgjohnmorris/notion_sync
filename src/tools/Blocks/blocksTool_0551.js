/**
 * Generated Tool: blocksTool_0551
 * Domain: Blocks
 * ID: 0551
 */
exports.blocksTool_0551 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0551:', error);
    throw error;
  }
};
