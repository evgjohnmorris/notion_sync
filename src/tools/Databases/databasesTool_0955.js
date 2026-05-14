/**
 * Generated Tool: databasesTool_0955
 * Domain: Databases
 * ID: 0955
 */
exports.databasesTool_0955 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0955:', error);
    throw error;
  }
};
